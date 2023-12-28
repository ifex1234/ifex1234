import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Bdcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Groceries
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Diapers</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Bdcrumb;