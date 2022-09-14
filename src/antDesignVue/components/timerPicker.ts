import { Componet } from "../../utils/template";

export const key = ["timerPicker", "timer", "时间选择框", "时间"];

export const value: Componet = function (index: string) {
  const model = `modalValue${index}`;
  return {
    template: `<a-time-picker v-model:value="formState.${model}" value-format="HH:mm:ss" />`,
    script: `const ${model} = ref();`,
    key: model,
    value: "",
  };
};
export const timerPicker = {
  key,
  value,
};
