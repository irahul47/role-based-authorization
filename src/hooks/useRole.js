const useRole = (roles) => {
  const token = JSON.parse(localStorage.getItem(""));
  const role = roles.includes(token);

  return role;
};

export default useRole;
