import axios from "axios";
const baseUrl = import.meta.env.VITE_API_ENDPOINT;

export async function getHomeData() {
  try {
    const { data } = await axios.get(`${baseUrl}/home`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserData(userId) {
  try {
    const { data } = await axios.get(`${baseUrl}/user/profile/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAddressData(userId) {
  try {
    const { data } = await axios.get(`${baseUrl}/user/address/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPaymentData(userId) {
  try {
    const { data } = await axios.get(`${baseUrl}/user/payment-mode/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCartData(userId) {
  try {
    const { data } = await axios.get(`${baseUrl}/user/cart/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postCart(userId, itemId) {
  try {
    const { data } = await axios.post(`${baseUrl}/cart/${userId}`, {
      itemId,
      quantity: 1,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postAddress(
  userId,
  state,
  city,
  pincode,
  phoneNumber,
  fullAddress
) {
  try {
    const { data } = await axios.post(`${baseUrl}/user/address/${userId}`, {
      state,
      city,
      pincode,
      phoneNumber,
      fullAddress,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postPaymentMode(
  userId,
  lastFourDigits,
  expiration,
  cvv,
  nameOnCard
) {
  try {
    const { data } = await axios.post(
      `${baseUrl}/user/payment-mode/${userId}`,
      {
        lastFourDigits,
        expiration,
        cvv,
        nameOnCard,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCartData(userId) {
  try {
    const { data } = await axios.delete(`${baseUrl}/user/cart/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postLoginRequest(email, password) {
  try {
    const { data } = await axios.post(`${baseUrl}/auth/login/`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postRegisterRequest(name, email, password, phoneNumber) {
  try {
    const { data } = await axios.post(`${baseUrl}/auth/signup/`, {
      name,
      email,
      password,
      phoneNumber,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRestaurantMenu(restaurantId) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/restaurant/${restaurantId}/menu`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductData(restaurantId) {
  try {
    const { data } = await axios.get(`${baseUrl}/restaurant/${restaurantId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
