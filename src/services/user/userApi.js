import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.EXPO_PUBLIC_BASE_RTDB_URL

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getProfilePicture: builder.query({
            query: (locadId) => `profilePictures/${locadId}.json`
        }),
        putProfilePicture: builder.mutation({
            query: (data) => ({
                url: `profilePictures/${data.localId}.json`,
                method: 'PUT',
                body: {
                    image: data.image
                }
            })
        })
    })
})

export const { useGetProfilePictureQuery, usePutProfilePictureMutation } = userApi