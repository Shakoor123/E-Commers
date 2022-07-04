import axios from 'axios';

const BASE_URL='http://localhost:5000/api/'
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJkNGRlYjM3MmYwOWE4MTVjMTJlZjYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTY5NTc5ODksImV4cCI6MTY1NzIxNzE4OX0.DrmMNMa1IZXy5VFzYaprRDwUbmQwwrNzrAQUtEPMb1g"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`shakoor ${TOKEN}`},
});