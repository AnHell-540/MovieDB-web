import style from './InfoSection.module.css'

interface infoItemProps {
  title: string,
  content: string | number
}

const InfoItem = ({ title, content }: infoItemProps) => {
  return (
    <div className={style.container}>
      <p className={style.info_section_title}>{title}</p>
      <p className={style.info_section_content}>{content}</p>
    </div>
  );
};

interface InfoSectionProps {
  items: infoItemProps[]
}

export const InfoSection = ({ items }: InfoSectionProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <InfoItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};