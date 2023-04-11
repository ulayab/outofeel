const data = {
  user_name: "",
  user_phone: "",
  user_email: "",
  card1: "",
  card4: "",
};

const columns = ["user_name", "user_phone", "user_email", "card1", "card4"];

columns.forEach((e) => {
  const target = document.getElementById(e);
  if (target && data[e]) target.value = data[e];
});

document.getElementById("how2know1").checked = true;
document.getElementById("date_2024-10-08").checked = true;
document.getElementById("CheckboxGroup1_0").checked = true;
