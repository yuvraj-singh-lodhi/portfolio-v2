interface titleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: titleProps) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
        {text}
      </h1>
    </div>
  );
};
export default Title;
