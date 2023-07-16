import React from "react";

import { useForm } from "react-hook-form";

import * as S from "./styles";
import SidePanel from "../../componets/side-panel/SidePanel";
import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import Button from "../../componets/button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  fetchPostWork,
  fetchPostWorkArgs,
  fetchWorks,
} from "../../redux/slices/worksSlice";
import InputBlock from "../../componets/input-block/InputBlock";
import { Link } from "react-router-dom";
import { fetchAllOptions } from "../../redux/slices/customerSlice";

interface IAddProps {}

const Add: React.FC<IAddProps> = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((props) => props.works.jobs);
  const { items: options } = useAppSelector((props) => props.customer);
  const isAuth = useAppSelector((props) => props.works.isAuth);

  const date = new Date();

  const tKmToHours = (customerName: string, km: number) => {
    const item = options.find((obj) => obj.customer === customerName);

    if (!item) return 2;
    const priceOneHour: number = item.hour; // 350: number
    const priceOneKm: number = item.km; // 16: number
    const maxKmInHour: number = priceOneHour / priceOneKm; // 21,875

    const result = (km / maxKmInHour).toFixed(1);
    const resultToFixed_2 = (km / maxKmInHour).toFixed(2);
    const indexLastNumber = result.length - 1;
    const lastNumber = result[indexLastNumber];

    if (+result < 2 && +resultToFixed_2 < 2) {
      return 2;
    }

    if (
      (lastNumber === "0" && +resultToFixed_2 >= currentHour) ||
      lastNumber === "1" ||
      lastNumber === "2" ||
      lastNumber === "3" ||
      lastNumber === "4" ||
      lastNumber === "5"
    ) {
      return Math.floor(+result) + 0.5;
    }

    if (
      lastNumber === "6" ||
      lastNumber === "7" ||
      lastNumber === "8" ||
      lastNumber === "9"
    ) {
      return Math.ceil(+result);
    }

    if (lastNumber === "0") {
      return Math.floor(+result);
    }
  };

  const whatIncome = (customerName: string, hours: number, km: number) => {
    const item = options.find((obj) => obj.customer === customerName);

    if (!item) return undefined;

    const priceOneHour: number = item.hour; // 350: number
    const priceOneKm: number = item.km; // 16: number

    const incomeInKm = priceOneKm * km; // 16 UAH * (50 km * 17 uah ) = 800 uah
    const incomeInHours = priceOneHour * hours; // 300 UAH * 3 = 900 uah

    if (incomeInHours > incomeInKm) {
      return incomeInHours;
    } else {
      return incomeInKm;
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<fetchPostWorkArgs>({
    mode: "onBlur",
    defaultValues: {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    },
  });

  const currentCustomer = watch("customer");
  const currentKm = watch("km");
  const currentHour = watch("hours");
  const currentStatus = +watch("status");

  const onSubmit = async (data: fetchPostWorkArgs) => {
    const possibleObjs = items.filter((item: fetchPostWorkArgs) =>
      item.year === +data.year &&
      item.day === +data.day &&
      item.month === +data.month
        ? item
        : undefined
    );

    const newId =
      possibleObjs && possibleObjs.length >= 1
        ? Math.max(...possibleObjs.map((item: fetchPostWorkArgs) => item.id)) +
          1
        : 1;

    const newData = {
      ...data,
      id: newId,
      day: +data.day,
      month: +data.month,
      year: +data.year,
      hours: +data.hours,
      km: +data.km,
      income: data.income ? +data.income : undefined,
      expenditure: data.expenditure ? +data.expenditure : undefined,
      status: +data.status,
    };

    await dispatch(fetchPostWork(newData));
    await dispatch(fetchWorks());

    reset();
  };

  React.useEffect(() => {
    dispatch(fetchAllOptions());
  }, []);

  React.useEffect(() => {
    setValue(
      "hours",
      tKmToHours(currentCustomer || "Invatech", currentKm) || 0
    );
  }, [currentCustomer, currentKm]);

  React.useEffect(() => {
    currentStatus === 2 || currentStatus === 1 || currentStatus === 3
      ? setValue(
          "income",
          whatIncome(currentCustomer || "Invatech", currentHour, currentKm)
        )
      : setValue("income", undefined);
  }, [currentCustomer, currentKm, currentHour, currentStatus]);

  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>{isAuth ? "Hello, driver!" : "Hello, world!"}</h2>
        <main>
          <h3>Form to fill:</h3>
          <div className="overflow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="items__input_date">
                <InputBlock
                  label="date day *"
                  placeholder="Day..."
                  inputType="number"
                  errors={errors?.day}
                  register={register}
                  keyRegister="day"
                  messageRequire="day format: 1-31"
                  messageRequireMin="min day 1"
                  valueMin={1}
                  messageRequireMax="max day 31"
                  valueMax={31}
                />
                <InputBlock
                  label="date month *"
                  placeholder="month..."
                  inputType="number"
                  errors={errors?.month}
                  register={register}
                  keyRegister="month"
                  messageRequire="month format: 1-12"
                  messageRequireMin="min day 1"
                  valueMin={1}
                  messageRequireMax="max day 12"
                  valueMax={12}
                />
                <InputBlock
                  label="date year *"
                  placeholder="year..."
                  inputType="number"
                  errors={errors?.year}
                  register={register}
                  keyRegister="year"
                  messageRequire="incorrect year"
                  messageRequireMin="min year 2023"
                  valueMin={2023}
                  messageRequireMax="max year 2100"
                  valueMax={2100}
                />
              </div>
              <div className="items__input_data">
                <div className="input__block">
                  <h5>customer *</h5>
                  <select {...register("customer")}>
                    {options.map((item) => (
                      <option key={item._id} value={item.customer}>
                        {item.customer}
                      </option>
                    ))}
                  </select>
                </div>

                <InputBlock
                  label="km *"
                  placeholder="km..."
                  inputType="number"
                  errors={errors?.km}
                  register={register}
                  keyRegister="km"
                  messageRequire="incorrect km"
                  messageRequireMin="min km 1"
                  valueMin={1}
                  messageRequireMax="max km 10000"
                  valueMax={10000}
                />

                <InputBlock
                  label="hour *"
                  placeholder="hour..."
                  inputType="number"
                  step="0.5"
                  errors={errors?.hours}
                  register={register}
                  keyRegister="hours"
                  messageRequire="incorrect hour"
                  messageRequireMin="min hour 1"
                  valueMin={1}
                  messageRequireMax="max hour 24"
                  valueMax={24}
                  valueAsNumber
                />
              </div>
              <div className="items__input_route">
                <InputBlock
                  label="route"
                  placeholder="write route..."
                  inputType="text"
                  errors={errors?.route}
                  register={register}
                  keyRegister="route"
                  require={false}
                  messageRequire="incorrect route"
                  messageMaxLength={"max char 50"}
                  valueMaxLength={50}
                />
              </div>

              <div className="items__input_money">
                <div className="income input__block">
                  <InputBlock
                    label="income *"
                    placeholder="income..."
                    inputType="number"
                    errors={errors?.income}
                    register={register}
                    keyRegister="income"
                    messageRequire="incorrect income"
                    messageRequireMin="min income 1"
                    valueMin={1}
                    messageRequireMax="max income 100000"
                    valueMax={100000}
                  />
                </div>
                <div className="expenditure input__block">
                  <InputBlock
                    label="expenditure"
                    placeholder="expenditure..."
                    inputType="number"
                    errors={errors?.expenditure}
                    register={register}
                    keyRegister="expenditure"
                    require={false}
                    messageRequire="incorrect expenditure"
                    messageRequireMin="min expenditure 1"
                    valueMin={1}
                    messageRequireMax="max expenditure 100000"
                    valueMax={100000}
                  />
                </div>
                <div className="description input__block">
                  <InputBlock
                    label="description"
                    placeholder="description..."
                    inputType="text"
                    errors={errors?.description}
                    register={register}
                    keyRegister="description"
                    require={false}
                    messageRequire="incorrect description"
                    messageMaxLength={"max char 20"}
                    valueMaxLength={20}
                  />
                </div>
              </div>

              <div className="items__input_status">
                <div className="items__input">
                  <h5>
                    select status * ( green color: paid ; yellow color: unknown
                    ; red color: debt; gray color: other money )
                  </h5>

                  <div className="radio__block">
                    <div className="radio">
                      <input
                        className="paid__input"
                        type="radio"
                        value={1}
                        {...register("status", {
                          required: true,
                        })}
                      />
                      <label className="paid__label"></label>
                    </div>

                    <div className="radio">
                      <input
                        className="unknown__input"
                        type="radio"
                        value={2}
                        {...register("status", {
                          required: true,
                        })}
                      />
                      <label className="unknown__label"></label>
                    </div>

                    <div className="radio">
                      <input
                        className="debt__input"
                        type="radio"
                        value={3}
                        {...register("status", {
                          required: true,
                        })}
                      />
                      <label className="debt__label"></label>
                    </div>
                    <div className="radio">
                      <input
                        className="other__input"
                        type="radio"
                        value={4}
                        {...register("status", {
                          required: true,
                        })}
                      />
                      <label className="other__label"></label>
                    </div>
                  </div>
                </div>
                {errors?.status && (
                  <h6 className="error">
                    {errors?.status?.message || "choose status!"}
                  </h6>
                )}
              </div>
              <div className="btns">
                <Link to="/table-for-the-driver/">
                  <Button label="back" isUnActive />
                </Link>

                <Button label="ADD" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Add;
