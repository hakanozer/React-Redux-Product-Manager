export const control = () => {
    const stUser = sessionStorage.getItem("user")
    if ( stUser ) {
        return stUser;
    }
}