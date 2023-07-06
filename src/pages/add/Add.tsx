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

// type Inputs = {
//   day: number ;
//   month: number;
//   year: number;
//   customer: string;
//   hour: string;
//   km: string;
//   route: string;
//   income: string;
//   expenditure: string;
//   description: string;
//   status: string;
// };
// export type fetchPostWorkArgs = {
//   id: number;
//   day: number;
//   month: number;
//   year: number;
//   customer: string;
//   route?: string;
//   hours: number;
//   km: number;
//   income?: number;
//   expenditure?: number;
//   description?: string;
//   status: number;
// };

interface IAddProps {}

const Add: React.FC<IAddProps> = () => {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector((props) => props.works.jobs);

  const date = new Date();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<fetchPostWorkArgs>({
    mode: "onBlur",
    defaultValues: {
      day: date.getDay() + 2,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    },
  });

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

  React.useEffect(() => {}, []);

  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <h3>Form to fill:</h3>
          <div className="overflow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="items__input_date">
                <div className="flex">
                  <div className="input__block">
                    <h5>date day *</h5>
                    <input
                      className={errors?.day ? "active_error" : ""}
                      type="number"
                      placeholder="Day..."
                      {...register("day", {
                        required: "day format: 1-31",
                        min: { value: 1, message: "min day 1" },
                        max: { value: 31, message: "max day 31" },
                      })}
                    />
                    {errors?.day && (
                      <h6 className="error">
                        {errors?.day?.message || "day format: 1-31"}
                      </h6>
                    )}
                  </div>

                  <div className="input__block">
                    <h5>date month *</h5>
                    <input
                      className={errors?.day ? "active_error" : ""}
                      type="number"
                      placeholder="month..."
                      {...register("month", {
                        required: "month format: 1-12",
                        min: { value: 1, message: "min month 1" },
                        max: { value: 12, message: "max month 12" },
                      })}
                    />
                    {errors?.month && (
                      <h6 className="error">
                        {errors?.month?.message || "month format: 1-12"}
                      </h6>
                    )}
                  </div>

                  <div className="input__block">
                    <h5>date year *</h5>
                    <input
                      className={errors?.year ? "active_error" : ""}
                      type="number"
                      placeholder="year..."
                      {...register("year", {
                        required: "incorrect year",
                        min: { value: 2023, message: "min year 2023" },
                        max: { value: 2100, message: "max year 2100" },
                      })}
                    />
                    {errors?.year && (
                      <h6 className="error">
                        {errors?.year?.message || "incorrect year"}
                      </h6>
                    )}
                  </div>
                </div>
              </div>
              <div className="items__input_data">
                <div className="input__block">
                  <h5>customer *</h5>
                  <select {...register("customer")}>
                    <option value="Инватех">Инватех</option>
                    <option value="УкрЗапчасть">УкрЗапчасть</option>
                    <option value="Енергитическая">Енергитическая</option>
                    <option value="Осеняя">Осеняя</option>
                  </select>
                </div>
                <div className="input__block">
                  <h5>hour *</h5>
                  <input
                    className={errors?.hours ? "active_error" : ""}
                    type="number"
                    placeholder="hour..."
                    {...register("hours", {
                      required: "incorrect hour",
                      min: { value: 1, message: "min hour 1" },
                      max: { value: 24, message: "max hour 24" },
                    })}
                  />
                  {errors?.hours && (
                    <h6 className="error">
                      {errors?.hours?.message || "incorrect hour"}
                    </h6>
                  )}
                </div>
                <div className="input__block">
                  <h5>km *</h5>
                  <input
                    className={errors?.km ? "active_error" : ""}
                    type="number"
                    placeholder="km..."
                    {...register("km", {
                      required: "incorrect km",
                      min: { value: 1, message: "min km 1" },
                      max: { value: 10000, message: "max km 10000" },
                    })}
                  />
                  {errors?.km && (
                    <h6 className="error">
                      {errors?.km?.message || "incorrect km"}
                    </h6>
                  )}
                </div>
              </div>
              <div className="items__input_route">
                <div className="input__block">
                  <h5>route </h5>
                  <input
                    className={errors?.route ? "active_error" : ""}
                    type="text"
                    placeholder="write route..."
                    {...register("route", {
                      required: false,
                      maxLength: { value: 50, message: "max char 50" },
                    })}
                  />
                  {errors?.km && (
                    <h6 className="error">
                      {errors?.route?.message || "incorrect route"}
                    </h6>
                  )}
                </div>
              </div>

              <div className="items__input_money">
                <div className="income input__block">
                  <h5>income</h5>
                  <input
                    className={errors?.income ? "active_error" : ""}
                    type="number"
                    placeholder="income..."
                    {...register("income", {
                      required: false,
                      min: { value: 1, message: "min income 1" },
                      max: { value: 100000, message: "max income 100000" },
                    })}
                  />
                  {errors?.income && (
                    <h6 className="error">
                      {errors?.income?.message || "incorrect income"}
                    </h6>
                  )}
                </div>
                <div className="expenditure input__block">
                  <h5>expenditure</h5>
                  <input
                    className={errors?.expenditure ? "active_error" : ""}
                    type="number"
                    placeholder="expenditure..."
                    {...register("expenditure", {
                      required: false,
                      min: { value: 1, message: "min expenditure 1" },
                      max: { value: 100000, message: "max expenditure 100000" },
                    })}
                  />
                  {errors?.expenditure && (
                    <h6 className="error">
                      {errors?.expenditure?.message || "incorrect expenditure"}
                    </h6>
                  )}
                </div>
                <div className="expenditure input__block">
                  <h5>description</h5>
                  <input
                    className={errors?.description ? "active_error" : ""}
                    type="number"
                    placeholder="description..."
                    {...register("description", {
                      required: false,
                      maxLength: { value: 20, message: "max char 20" },
                    })}
                  />
                  {errors?.description && (
                    <h6 className="error">
                      {errors?.description?.message || "incorrect description"}
                    </h6>
                  )}
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
                <Button label="back" isUnActive />
                <Button label="add item" />
                {/* disabled={!isValid} */}
                <input type="submit" />
                {errors?.day && <p style={{ color: "black" }} />}
              </div>
            </form>
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Add;
