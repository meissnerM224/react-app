function Message() {
    const myName ="Marten";
    if(myName)
        return <h1> Hello, my name is {myName}</h1>;
    return <h1>Hello World!</h1>

}
export default Message;