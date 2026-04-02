{
  type Role = "user" | "admin" | "guest";

  type RolePermission = Record<Role, boolean>;

  const a: RolePermission = {
    admin: true,
    guest: false,
    user: false,
  };
}
