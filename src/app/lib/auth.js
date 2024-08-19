// lib/auth.js

// Function to create a user
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

// Function to login a user
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
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Function to validate a token
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

// Client-side function to get session
export const getSession = async () => {
  // Check if we're running on the client side
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token"); // Retrieve token from local storage

    if (!token) {
      return null; // No token found, return null
    }

    try {
      const session = await validateToken(token); // Validate the token
      return session; // Return session data if valid
    } catch (error) {
      console.error("Error during authentication:", error);
      return null; // Return null if validation fails
    }
  }
  return null; // Return null if on the server side
};
