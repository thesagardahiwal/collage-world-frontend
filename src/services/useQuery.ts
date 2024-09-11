"use server"
import axiosInstance from "./axiosInstance"

export const post = async (query : string, body : object, token: string) => {
    const response = await axiosInstance(token).post(query, body);
    return response.data;
}

export const get = async (query : string, token: string) => {
    const response = await axiosInstance(token).get(query)
    return response.data;
}

export const del = async (query: string, token: string) => {
    const response = await axiosInstance(token).delete(query)
    return response.data;
}