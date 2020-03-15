const ImageLink = ({ href, src, hoverSrc }) => {
  return (
    <>
      <a href={href}>
        <div className="hover-link"></div>
      </a>
      <style jsx>{`
      .hover-link {
        background-image: url('${src}');
        width: 40px;
        height: 40px;
      }
      .hover-link:hover {
        background-image: url('${hoverSrc}');
        width: 40px;
        height: 40px;
      }
      `}</style>
    </>
  );
};

export default ImageLink;
