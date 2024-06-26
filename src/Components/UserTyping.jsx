
export default function UserTyping(
    userinput,
    className = '',
){
    const typedCharaters = userinput.split(''); 
  return (
    <div className={className}>
       { typedCharaters.map((char,index)=>{
return <span key={index} className="text-primary-400">{char}</span>
})}
    </div>
  )
}
