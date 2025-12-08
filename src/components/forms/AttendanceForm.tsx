"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

interface AttendanceFormProps {
  type: "create" | "update";
  data?: any;
}

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z
    .email("Invalid email address")
    .min(20, "Email must be at least 20 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().min(3, "First name must be at least 3 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 characters"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  bloodType: z.string().min(1, "Blood type is required"),
  birthday: z.date({ error: "Invalid date" }),
  sex: z.enum(["male", "female", "other"], { error: "Invalid sex" }),
  img: z.instanceof(File, { error: "Invalid image file" }),
  // Add other fields and validations as needed
});

type Inputs = z.infer<typeof schema>;

const AttendanceForm = ({ type, data }: AttendanceFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new attendance</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          type="text"
          register={register}
          name="username"
          defaultValue={data?.username}
          error={errors.username}
        />
        <InputField
          label="Email"
          type="text"
          register={register}
          name="email"
          defaultValue={data?.email}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="text"
          register={register}
          name="password"
          defaultValue={data?.password}
          error={errors.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          type="text"
          register={register}
          name="firstName"
          defaultValue={data?.firstName}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          type="text"
          register={register}
          name="lastName"
          defaultValue={data?.lastName}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          type="text"
          register={register}
          name="phone"
          defaultValue={data?.phone}
          error={errors.phone}
        />
        <InputField
          label="Address"
          type="text"
          register={register}
          name="address"
          defaultValue={data?.address}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          type="text"
          register={register}
          name="bloodType"
          defaultValue={data?.bloodType}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          type="date"
          register={register}
          name="birthday"
          defaultValue={data?.birthday}
          error={errors.birthday}
        />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label htmlFor="" className="text-xs text-gray-500">
          Sex
        </label>
        <select
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          {...register("sex")}
          defaultValue={data?.sex}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.sex?.message ? (
          <p className="text-red-400 text-xs">{errors.sex.message}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
        <label
          htmlFor="img"
          className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
        >
          <Image src="/upload.png" alt="" width={28} height={28} />
          <span>Upload a photo</span>
        </label>
        <input id="img" type="file" {...register("img")} className="hidden" />
        {errors.img?.message ? (
          <p className="text-red-400 text-xs">{errors.img.message}</p>
        ) : null}
      </div>
      <button className="bg-blue-400 text-white rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AttendanceForm;
