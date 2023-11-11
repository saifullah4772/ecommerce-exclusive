import React from "react";

const Header = () => {
  return (
    <main className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full flex justify-center items-center p-8 md:p-0 md:pl-12 order-2 md:order-1 py-24">
          <div className="md:w-2/3">
            <h1 className="text-6xl font-semibold pb-8">Our Story</h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, doloremque illo laboriosam similique magnam optio sint
              voluptate ex ipsa ipsum impedit nam ratione ullam. Non neque
              debitis amet quae repellat dolorum dolore ad totam voluptates
              velit! Consequuntur eligendi laborum saepe qui quos cumque,
              architecto doloribus voluptatibus tenetur incidunt, id
              perspiciatis, explicabo delectus facere vel! Esse, nobis. Tempore
              at quis accusamus dicta labore a impedit ut vel vero tenetur
              numquam porro, culpa non officia totam libero harum cumque esse ad
              nostrum sint omnis perspiciatis adipisci. Eum pariatur temporibus
              autem corrupti modi, nihil tempore quasi veniam doloremque, quidem
              exercitationem? Maxime, esse inventore?
            </p>
          </div>
        </div>
        <div className="h-full order-1 md:order-2">
          <img
            src="/images/about.png"
            alt=""
            className="h-[700px] w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Header;
