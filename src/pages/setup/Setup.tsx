import React from "react";

import * as S from "./styles";
import { useForm } from "react-hook-form";
import SidePanel from "../../componets/side-panel/SidePanel";

import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import Button from "../../componets/button/Button";
import { Icon } from "../../componets/Icon";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  // addCustomer,
  // deleteCustomer,
  deleteOption,
  // editItem,
  editOption,
  editSalary,
  fetchAllOptions,
  fetchPostOption,
  getOneSalary,
  // findEditItem,
  // setPercent,
  // setRate,
} from "../../redux/slices/customerSlice";

type FormTypes = {
  salaryPercent: number;
  salaryRate: number;
  customer: string;
  hour: number;
  km: number;
  _id: string;
};

interface ISetupProps {}

const Setup: React.FC<ISetupProps> = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  //@ts-ignore
  const { percent, rate, items, customerItem } = useAppSelector(
    (props) => props.customer
  );

  const registerForm = () => {
    const {
      register,
      formState,
      handleSubmit,
      reset,
      watch,
      setFocus,
      setValue,
      getValues,
    } = useForm<FormTypes>({
      mode: "onBlur",

      defaultValues: {
        salaryPercent: percent ? percent : undefined,
        salaryRate: rate ? rate : undefined,
      },
    });
    return {
      register,
      formState,
      handleSubmit,
      reset,
      watch,
      setFocus,
      setValue,
      getValues,
    };
  };
  const forms = {
    salaryPercent: registerForm(),
    salaryRate: registerForm(),
    customer: registerForm(),
  };

  const salaryPercentSubmit = async (data: { salaryPercent: number }) => {
    // dispatch(setPercent(+data.salaryPercent));
    //@ts-ignore
    dispatch(editSalary({ percent: data.salaryPercent, rate })).finally(() => {
      dispatch(getOneSalary());
    });
  };

  const salaryRateSubmit = async (data: { salaryRate: number }) => {
    // dispatch(setRate(+data.salaryRate));
    //@ts-ignore
    dispatch(editSalary({ rate: data.salaryRate, percent })).finally(() => {
      dispatch(getOneSalary());
    });
  };

  const customerSubmit = async (data: {
    customer: string;
    hour: number;
    km: number;
  }) => {
    const customerData = {
      customer: data.customer,
      hour: +data.hour,
      km: +data.km,
    };

    dispatch(fetchPostOption(customerData)).finally(() =>
      dispatch(fetchAllOptions())
    );
    // dispatch(addCustomer(customerData));

    forms.customer.reset();
  };

  const editCustomer = () => {
    if (isEdit) {
      if (confirm(`add changes?`)) {
        const { _id, customer, hour, km } = forms.customer.getValues();
        dispatch(
          editOption({ _id, customer: customer, hour: hour, km: km })
        ).finally(() => dispatch(fetchAllOptions()));

        setIsEdit(false);
        forms.customer.reset();
      } else {
        setIsEdit(false);
      }
    }
  };

  const clickDeleteCustomer = (id: string) => {
    if (confirm(`are you want to delete ${id}?`)) {
      dispatch(deleteOption({ id })).finally(() => dispatch(fetchAllOptions()));
      // dispatch(deleteCustomer(customer));
    }
  };

  const clickEditCustomer = (
    id: string,
    customer: string,
    hour: number,
    km: number
  ) => {
    // dispatch(findEditItem({ customer, hour, km }));
    setIsEdit(true);
    forms.customer.setFocus("customer");
    forms.customer.setValue("customer", customer);
    forms.customer.setValue("hour", hour);
    forms.customer.setValue("km", km);
    forms.customer.setValue("_id", id);
  };

  React.useEffect(() => {
    dispatch(fetchAllOptions());
    dispatch(getOneSalary());
  }, []);

  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <h3>Setup:</h3>
          <div className="overflow">
            <form
              onSubmit={forms.salaryPercent.handleSubmit(salaryPercentSubmit)}
              className="addData"
            >
              <p className="addData__description">Salary % day:</p>
              <p className="addData__data">20 %</p>
              <div className="addData__inputBlock">
                <input
                  type="number"
                  placeholder="? %"
                  min={0}
                  max={100}
                  {...forms.salaryPercent.register("salaryPercent", {
                    required: "incorected percent",
                    min: { value: 0, message: "min value 0%" },
                    max: { value: 100, message: "min value 100%" },
                  })}
                />
                <h6>
                  {forms.salaryPercent.formState.errors.salaryPercent?.message}
                </h6>
              </div>
              <Button label="submit %" />
            </form>
            <form
              className="addData"
              onSubmit={forms.salaryRate.handleSubmit(salaryRateSubmit)}
            >
              <p className="addData__description">Salary UAH day:</p>
              <p className="addData__data">300 UAH</p>
              <div className="addData__inputBlock">
                <input
                  type="number"
                  placeholder="? UAH"
                  min={1}
                  max={10000}
                  {...forms.salaryRate.register("salaryRate", {
                    required: "incorected price",
                    min: { value: 0, message: "min value 1 UAH" },
                    max: { value: 100000, message: "max value 10000" },
                  })}
                />
                <h6>{forms.salaryRate.formState.errors.salaryRate?.message}</h6>
              </div>

              <Button label="submit UAH" />
            </form>

            <form
              className="addOption"
              onSubmit={forms.customer.handleSubmit(customerSubmit)}
            >
              <div className="addOption__customer">
                <input
                  // ref={editInputRef}
                  type="text"
                  placeholder="customer..."
                  {...forms.customer.register("customer", {
                    required: "incorected name",
                    minLength: { value: 3, message: "min 3 char" },
                    maxLength: { value: 15, message: "max 15 char" },
                  })}
                />
                <h6>{forms.customer.formState.errors.customer?.message}</h6>
              </div>
              <div className="addOption__hour">
                <input
                  type="number"
                  placeholder="UAH/hour ..."
                  min={1}
                  max={10000}
                  {...forms.customer.register("hour", {
                    required: "incorected hour",
                    min: { value: 1, message: "min 1 UAH" },
                    max: { value: 10000, message: "max 10000 UAH" },
                  })}
                />
                <h6>{forms.customer.formState.errors.hour?.message}</h6>
              </div>
              <div className="addOption__km">
                <input
                  type="number"
                  placeholder="UAH/km ..."
                  min={1}
                  max={100}
                  {...forms.customer.register("km", {
                    required: "incorected UAH",
                    min: { value: 1, message: "min 1 UAH" },
                    max: { value: 100, message: "max 100 UAH" },
                  })}
                />
                <h6>{forms.customer.formState.errors.km?.message}</h6>
              </div>
              {isEdit ? (
                // <button onClick={editCustomer}>edit</button>
                <Button label={"edit"} click={editCustomer} />
              ) : (
                <Button label={"add"} />
              )}

              {/* <Button label="add" /> */}
            </form>

            <div className="optionTable">
              <div className="optionTable__header">
                <p>customer</p>
                <p>UAH/hour</p>
                <p>UAH/km</p>
              </div>
              <div className="optionTable__overflow">
                {items.map(
                  (item: {
                    _id: string;
                    customer: string;
                    hour: number;
                    km: number;
                  }) => (
                    <div key={item.customer} className="optionTable__body">
                      <p>{item.customer}</p>
                      <p>{item.hour}</p>
                      <p>{item.km}</p>
                      <Icon
                        iconName="edit"
                        onClick={() =>
                          clickEditCustomer(
                            item._id,
                            item.customer,
                            item.hour,
                            item.km
                          )
                        }
                      />
                      <Icon
                        iconName="close"
                        onClick={() => clickDeleteCustomer(item._id)}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Setup;
