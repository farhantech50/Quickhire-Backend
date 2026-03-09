const locations = [
  "Gulshan, Dhaka",
  "Banani, Dhaka",
  "Dhanmondi, Dhaka",
  "Uttara, Dhaka",
  "Motijheel, Dhaka",
  "Mirpur, Dhaka",
  "Tejgaon, Dhaka",
  "Remote",
];

const categories = [
  "Software Development",
  "Mobile Development",
  "Design",
  "Quality Assurance",
  "IT & Networking",
  "Data & Analytics",
  "Marketing",
  "Content & Writing",
  "Human Resources",
  "Customer Support",
  "Management",
];

export const getLocation = (req, res) => {
  return res
    .status(200)
    .json(locations.map((loc, index) => ({ id: index + 1, name: loc })));
};

export const getCategory = (req, res) => {
  return res
    .status(200)
    .json(categories.map((cat, index) => ({ id: index + 1, name: cat })));
};
