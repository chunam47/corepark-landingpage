export default function Header() {
  return (
    <React.Fragment>
      <div className={scroll ? 'header-wrap fix-header' : 'header-wrap'}></div>
    </React.Fragment>
  );
}
