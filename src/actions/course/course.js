import * as T from './types'

export const getCourseRequest = () => {
  return{
    type: T.GET_COURSE_REQUEST,
  }
}

export const getCourseSuccess = (course) => {
  return{
    type: T.GET_COURSE_SUCCESS,
    course
  }
}

export const getCourseError = (error) => {
  return{
    type: T.GET_COURSE_ERROR,
    error
  }
}