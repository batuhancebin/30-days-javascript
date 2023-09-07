const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],

  totalIncome() {
    const incomeAmounts = this.incomes.map((income) => income.amount);
    return incomeAmounts.reduce((total, amount) => total + amount, 0);
  },

  totalExpense() {
    const expenseAmounts = this.expenses.map((expense) => expense.amount);
    return expenseAmounts.reduce((total, amount) => total + amount, 0);
  },

  accountInfo() {
    return `Name: ${this.firstName} ${
      this.lastName
    }, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
  },

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

//signUp function
function signUp(newUser) {
  const existingUser = users.find((user) => user.email === newUser.email);
  if (existingUser) {
    return "User already has an account.";
  }
  users.push(newUser);
  return "User successfully signed up.";
}

//signIn function
function signIn(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    user.isLoggedIn = true;
    return "User successfully signed in.";
  }
  return "Invalid credentials. Sign-in failed.";
}

//rateProduct function
function rateProduct(productId, userId, rating) {
  const product = products.find((p) => p._id === productId);
  if (product) {
    product.ratings.push({ userId, rate: rating });
    return "Product rated successfully.";
  }
  return "Product not found.";
}

//averageRating function
function averageRating(productId) {
  const product = products.find((p) => p._id === productId);
  if (product && product.ratings.length > 0) {
    const sumRatings = product.ratings.reduce(
      (total, rating) => total + rating.rate,
      0
    );
    return sumRatings / product.ratings.length;
  }
  return "No ratings available for this product.";
}

//likeProduct function
function likeProduct(productId, userId) {
  const product = products.find((p) => p._id === productId);
  if (product) {
    const userLiked = product.likes.includes(userId);
    if (userLiked) {
      product.likes = product.likes.filter(
        (likedUserId) => likedUserId !== userId
      );
      return "Product unliked.";
    } else {
      product.likes.push(userId);
      return "Product liked.";
    }
  }
  return "Product not found.";
}
