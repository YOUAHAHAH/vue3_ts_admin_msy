import dayjs from "dayjs";

// 获取当前时间
export const nowDate = (
  data?: string | undefined,
  timestamp?: number | undefined,
) => {
  return dayjs(timestamp).format(data ? data : "YYYY-MM-DD HH:mm:ss");
};

// 获取星期
export const weekDay = () => {
  const day: number = new Date().getDay();
  const weeks: string[] = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  );
  const week = weeks[day];
  return week;
};

//
export const nowHour = () => {
  const Hour: number = dayjs().hour();
  if (Hour >= 0 && Hour <= 6) {
    return "凌晨好！";
  } else if (Hour > 6 && Hour <= 12) {
    return "上午好！";
  } else if (Hour > 12 && Hour <= 18) {
    return "下午好！";
  } else if (Hour > 18 && Hour <= 23) {
    return "晚上好！";
  }
};
