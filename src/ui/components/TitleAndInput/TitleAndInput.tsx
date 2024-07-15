import React from "react";
import style from "../../views/Home/Home.module.css";

interface TitleAndInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}

export const TitleAndInput: React.FC<TitleAndInputProps> = ({
  onChange,
  title,
}) => {
  return (
    <section>
      <h1 className={`${style.title} ${style.poppins_bold}`} role="title">
        {title}
      </h1>
      <div>
        <input
          className={style.input}
          id="search"
          type="text"
          placeholder={"Search Movies"}
          onChange={onChange}
        />
      </div>
    </section>
  );
};
