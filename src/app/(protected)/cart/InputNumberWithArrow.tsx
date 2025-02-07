"use client";

import { Button, Space } from "antd";
import React, { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  defaultValue?: number;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
};

const InputNumberWithArrow = ({
  defaultValue,
  onChange,
  min,
  max,
  value,
}: Props) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? 0);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (newValue: number) => {
    if (min && newValue < min) return;
    if (max && newValue > max) return;

    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Space.Compact>
      <Button onClick={() => handleChange(internalValue - 1)} className="!px-2">
        <IoIosArrowBack />
      </Button>
      <div className="grid h-8 place-items-center border-y border-slate-300 px-3 text-center">
        {internalValue || 0}
      </div>
      <Button onClick={() => handleChange(internalValue + 1)} className="!px-2">
        <IoIosArrowForward />
      </Button>
    </Space.Compact>
  );
};

export default InputNumberWithArrow;
