export const formData = localStorage.getItem("formData");

export const parsedFormData = JSON.parse(
  localStorage.getItem("formData") || "{}",
);
export const income = parseFloat(parsedFormData.income);
export const ipn = Math.round(income * 0.03);
export const so = Math.round(income * 0.035);
export const opv = Math.round(income * 0.1);
export const vosms = Math.round(income * 0.05);

export const taxationCategories = ["Упрощенный", "Общеустановленный"];
