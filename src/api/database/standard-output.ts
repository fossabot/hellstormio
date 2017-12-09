/**
 * Output MySQL response in JSON
 */
export function standardOutput(error: any, results: string, res: any) {
  if (error) {
    res.json({
      status: 500,
      error: error,
      response: null,
    })
    // If there is error, we send the error in the error section with 500 status
  } else {
    res.json({
      status: 200,
      error: null,
      response: results,
    })
  }
}
