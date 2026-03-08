import "./styles/tag.css";


const Tag = ({ children }) => {
  return (
    <div>
    <p className="tag">
      {children}
    <br></br></p>
    </div>
  )
}

export default Tag




/*
const Tag = ({
  children,
  variant = "default",
  size = "md",
  border = false,
  color,
  background
}) => {
  const cn = [
    "tag",
    `tag-${variant}`,
    `tag-${size}`,
    border && "tag-border"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span

    
      className={cn}
      style={{
        color: color,
        backgroundColor: background
      }}
    >
      {children}

      
      
    </span>
  );
};

export default Tag;
*/