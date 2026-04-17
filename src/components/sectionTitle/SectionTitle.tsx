import "./SectionTitle.scss";

type SectionTitleProps = {
    title: string;
    subtitle: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <>
            <h2 className="inner-title">{title}</h2>
            <h3 className="inner-second-title">{subtitle}</h3>
        </>
    );
};

export default SectionTitle;