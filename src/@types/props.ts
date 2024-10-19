/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputProps {
	name: string;
	type?: string;
	placeholder?: string;
	error?: FieldError;
	register: UseFormRegister<any>;
	id?: string;
	value?: string;
  length?: number;
  expected?: number
}