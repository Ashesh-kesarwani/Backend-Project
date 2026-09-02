const asyncHandler = (requesthandler) => {
    (res,req,next) => {
    Promise.resolve(requesthandler(res,req,next)).catch(err => next(err))
    }
}



export default asyncHandler








// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next)
//   } 
//   catch (error) {
//     res.status(err.code || 500).json({
//       message: err.message || 'Internal Server Error',
//     })
//   }
// };