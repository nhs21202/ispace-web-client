"use client";

import React, { PropsWithChildren } from "react";
import dayjs from "dayjs";
import timezonePlugin from "dayjs/plugin/timezone";
import utcPlugin from "dayjs/plugin/utc";
import AntdConfig from "../AntdConfig";

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

const AllProvider = ({ children }: PropsWithChildren) => {
  return <AntdConfig>{children}</AntdConfig>;
};

export default AllProvider;
