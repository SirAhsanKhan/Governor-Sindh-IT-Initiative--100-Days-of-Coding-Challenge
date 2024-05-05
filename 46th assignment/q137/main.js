try {
    throw new Error("something went wrong");
}
catch (error) {
    console.log(error.message);
}
