
const authContext = React.createContext({
    authenticted: false,
    login: () => {}
});

export default authContext;