export const createUser = async (email, password) => {
  try {
    const response = await fetch(
      "https://api-fapro-itw.fapro.dev/v1/authentication/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error("User creation failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      "https://api-fapro-itw.fapro.dev/v1/authentication/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    console.log("Login response data:", data);

    if (data && data.data && data.data.data && data.data.data.accessToken) {
      localStorage.setItem("token", data.data.data.accessToken);
    } else {
      throw new Error("Token not found in response");
    }

    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const validateToken = async (token) => {
  try {
    const response = await fetch(
      "https://api-fapro-itw.fapro.dev/v1/authentication/token",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Token validation failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error validating token:", error);
    throw error;
  }
};

export const getSession = async (shouldValidate = true) => {
  if (typeof window !== "undefined") {
    if (!shouldValidate) {
      return { user: null };
    }

    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }

    try {
      const session = await validateToken(token);
      return session;
    } catch (error) {
      console.error("Error during authentication:", error);
      return null;
    }
  }
  return null;
};
