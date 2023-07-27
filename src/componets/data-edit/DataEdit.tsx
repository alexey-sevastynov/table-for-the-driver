import React from "react";
import * as S from "./styles";
import axios from "axios";

import { useForm } from "react-hook-form";
import {
  deleteWork,
  editWork,
  fetchPostWorkArgs,
  fetchWorks,
} from "../../redux/slices/worksSlice";
import Button from "../button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { CHAD_ID, URL_API } from "../../constants";
import { showDate } from "../../helpers/showDate";

interface IDataEditProps {
  id: number;
  _id: string;
  day: number;
  month: number;
  year: number;
  customer: string;
  route?: string;
  hours: number;
  km: number;
  income?: number;
  expenditure?: number;
  description?: string;
  status: number;
}

const DataEdit: React.FC<IDataEditProps> = ({
  id,
  _id,
  day,
  month,
  year,
  status,
  customer,
  route,
  hours,
  km,
  income,
  expenditure,
  description,
}) => {
  const dispatch = useAppDispatch();
  const { items: options } = useAppSelector((props) => props.customer);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<fetchPostWorkArgs>({
    mode: "onBlur",
    defaultValues: {
      id,
      customer: customer,
      route,
      hours,
      km,
      income,
      expenditure,
      description,
      status,
    },
  });

  const currentCustomer = watch("customer");

  const removeItem = async (id: string) => {
    if (confirm("are you want to delete item ?")) {
      await dispatch(deleteWork({ id })).finally(() => dispatch(fetchWorks()));

      let message = `<b>DELETE work: ${showDate(day, month, year)}</b>\n`;
      message += `${customer}: ${km} km, ${hours} hours`;

      axios
        .post(URL_API, {
          chat_id: CHAD_ID,
          parse_mode: "html",
          text: message,
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
  };

  const onSubmit = async (data: fetchPostWorkArgs) => {
    const status = +data.status;

    await dispatch(editWork({ ...data, status, _id })).finally(() => {
      dispatch(fetchWorks());

      let message = `<b>EDIT work: ${showDate(day, month, year)}</b>\n`;
      message += `${customer}: ${hours} hours, ${km} km\n`;
      message += route && `route: ${route}\n`;
      message += `income: ${
        +status === 1 || +status === 4 ? `+${income} uah` : `${income} uah`
      }\n`;
      message +=
        expenditure && `expenditure: ${expenditure} uah, ${description} \n`;

      axios
        .post(URL_API, {
          chat_id: CHAD_ID,
          parse_mode: "html",
          text: message,
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    });
  };

  React.useEffect(() => {
    setValue("customer", currentCustomer);
  }, [options]);

  return (
    <S.Root tabIndex={status}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row__id">
          <p>id: *</p>
          <input
            type="number"
            className={errors.id ? "border" : ""}
            placeholder="id..."
            min={1}
            max={9}
            {...register("id", {
              required: "uniqul id (1-9)",
              min: { value: 1, message: "min value 1" },
              max: { value: 9, message: "max value 9" },
            })}
          />
          {<h6>{errors.id?.message}</h6>}
        </div>

        <div className="row__customer">
          <p>customer: *</p>
          <select
            {...register("customer", {
              required: "specify the customer",
              minLength: { value: 3, message: "min 3 char" },
              maxLength: { value: 40, message: "max 40 char" },
            })}
          >
            {options.map((item) => (
              <option key={item._id} value={item.customer}>
                {item.customer}
              </option>
            ))}
          </select>
        </div>
        {<h6>{errors.customer?.message}</h6>}

        <div className="row__route">
          <p>route:</p>
          <input
            type="text"
            className={errors.route ? "border" : ""}
            placeholder="route..."
            {...register("route", {
              required: false,
              minLength: { value: 3, message: "min char 3" },
              maxLength: { value: 50, message: "max char 50" },
            })}
          />
          {<h6>{errors.route?.message}</h6>}
        </div>

        <div className="row__hours">
          <p>hours: *</p>
          <input
            type="number"
            className={errors.hours ? "border" : ""}
            placeholder="hours..."
            step="0.5"
            min={1}
            max={24}
            {...register("hours", {
              required: "incorrect hours",
              min: { value: 1, message: "min hour 1" },
              max: { value: 24, message: "max hour 24" },
            })}
          />
          {<h6>{errors.hours?.message}</h6>}
        </div>

        <div className="row__km">
          <p>km: *</p>
          <input
            type="number"
            className={errors.km ? "border" : ""}
            placeholder="km..."
            min={1}
            max={10000}
            {...register("km", {
              required: "incorrect km",
              min: { value: 1, message: "min 1 km" },
              max: { value: 10000, message: "max 10000 km" },
            })}
          />
          {<h6>{errors.km?.message}</h6>}
        </div>

        <div className="row__income">
          <p>income:</p>
          <input
            type="number"
            className={errors.income ? "border" : ""}
            placeholder="income..."
            min={1}
            max={100000}
            {...register("income", {
              required: false,
              min: { value: 1, message: "min 1 uah" },
              max: { value: 100000, message: "max 100000 uah" },
            })}
          />
          {<h6>{errors.income?.message}</h6>}
        </div>
        <div className="row__expenditure">
          <p>expenditure:</p>
          <input
            type="number"
            className={errors.expenditure ? "border" : ""}
            placeholder="expenditure..."
            min={1}
            max={100000}
            {...register("expenditure", {
              required: false,
              min: { value: 1, message: "min 1 uah" },
              max: { value: 100000, message: "max 100000 uah" },
            })}
          />
          {<h6>{errors.expenditure?.message}</h6>}
        </div>
        <div className="row__description">
          <p>description:</p>
          <input
            type="text"
            className={errors.description ? "border" : ""}
            placeholder="description..."
            {...register("description", {
              required: false,
              minLength: { value: 3, message: "min char 3" },
              maxLength: { value: 20, message: "max char 20" },
            })}
          />
          {<h6>{errors.description?.message}</h6>}
        </div>

        <div className="row__status">
          <p>
            select status *
            {/* ( green color: paid ; yellow color: unknown ; red
            color: debt; gray color: other money ) */}
          </p>
          <div className="items__input">
            <div className="radio__block">
              <div className="radio">
                <input
                  defaultChecked={status === 1 ? true : undefined}
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
                  defaultChecked={status === 2 ? true : undefined}
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
                  defaultChecked={status === 3 ? true : undefined}
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
                  defaultChecked={status === 4 ? true : undefined}
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
          <Button label="delete" isUnActive click={() => removeItem(_id)} />
          <Button label="EDIT" />
        </div>
      </form>
    </S.Root>
  );
};

export default DataEdit;
