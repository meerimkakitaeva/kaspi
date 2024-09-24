export const getIncome = () => {
  const formData = localStorage.getItem("formData");
  const parsed = JSON.parse(formData || "{}");
  return parseFloat(parsed.income);
};

export const taxationCategories = ["Упрощенный", "Общеустановленный"];

export const getFormData = () => {
  return localStorage.getItem("formData");
};
