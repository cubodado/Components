import './Common.css';
import './Tab.css';

function Tab() {
  const onChangeColor = event => {
    const eventTarget = event.currentTarget;
    const eventTargetId = eventTarget.dataset.target;
    const tabs = document.querySelectorAll(".tab-div");
    const contents = document.querySelectorAll(".content-div");

    tabs.forEach(tab => {
      if (tab.dataset.target === eventTargetId) {
        eventTarget.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    })

    contents.forEach(content => {
      if (content.id === eventTargetId) {
        content.classList.add("selected");
      } else {
        content.classList.remove("selected");
      }
    })
  };

  return (
    <div className="tab">
      <section className="title">
        <h1>Tab</h1>
      </section>
      <section className="border-box">
        <section className="tab-bar">
          <div className="tab-div active" data-target="tab1" onClick={onChangeColor}>
            <p>Tab1</p>
          </div>
          <div className="tab-div" data-target="tab2" onClick={onChangeColor}>
            <p>Tab2</p>
          </div>
          <div className="tab-div" data-target="tab3" onClick={onChangeColor}>
            <p>Tab3</p>
          </div>
        </section>
        <section className="tab-content">
          <div id="tab1" className="content-div selected">
            <p>Tab menu ONE</p>
          </div>
          <div id="tab2" className="content-div">
            <p>Tab menu TWO</p>
          </div>
          <div id="tab3" className="content-div">
            <p>Tab menu THREE</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Tab;