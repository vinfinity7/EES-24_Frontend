import React from "react";

const FooterInputForm = () => {
  return (
    <div className=" flex  w-full h-fit pt-[4rem] object-contain overflow-hidden  flex-col p-4">
      <input
        type="text"
        placeholder="Name"
        className="p-1 bg-black placeholder-pitchdeck-slide-background rounded-sm font-bruno-ace-sc text-pitchdeck-slide-background w-full h-[3rem]"
      />

      <input
        type="text"
        placeholder="Contact"
        className="p-1 bg-black placeholder-pitchdeck-slide-background rounded-sm font-bruno-ace-sc text-pitchdeck-slide-background mt-4 w-full h-[3rem]"
      />

      <input
        type="text"
        placeholder="Message"
        className="pb-1 bg-black placeholder-pitchdeck-slide-background rounded-sm font-bruno-ace-sc text-pitchdeck-slide-background mt-4 w-full h-[5rem]"
      />
      <div className="flex w-full h-fit  gap-4 justify-evenly items-center">
        {/* zig-zag pattern at the bottom of input tag */}
        {/* <div className=" text-77xl font-libre-barcode-39 whitespace-pre-wrap inline-block w-[40%]  h-[66px]" style={{margin:'2rem'}}>{`Elecyvt  s `}</div>  */}
        <svg
          width="295"
          height="77"
          viewBox="0 0 505 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
          }}
        >
          <path
            d="M0 57V0.359997H8.64V57H0ZM11.52 57V0.359997H14.4V57H11.52ZM17.28 57V0.359997H25.92V57H17.28ZM34.56 57V0.359997H37.44V57H34.56ZM40.32 57V0.359997H43.2V57H40.32ZM46.125 57V0.359997H49.005V57H46.125ZM51.885 57V0.359997H60.525V57H51.885ZM63.405 57V0.359997H66.285V57H63.405ZM69.165 57V0.359997H72.045V57H69.165ZM80.685 57V0.359997H89.325V57H80.685ZM92.25 57V0.359997H100.89V57H92.25ZM103.77 57V0.359997H106.65V57H103.77ZM109.53 57V0.359997H118.17V57H109.53ZM126.81 57V0.359997H129.69V57H126.81ZM132.57 57V0.359997H135.45V57H132.57ZM138.375 57V0.359997H147.015V57H138.375ZM149.895 57V0.359997H158.535V57H149.895ZM161.415 57V0.359997H164.295V57H161.415ZM172.935 57V0.359997H175.815V57H172.935ZM178.695 57V0.359997H181.575V57H178.695ZM184.5 57V0.359997H193.14V57H184.5ZM201.78 57V0.359997H204.66V57H201.78ZM207.54 57V0.359997H216.18V57H207.54ZM219.06 57V0.359997H221.94V57H219.06ZM224.82 57V0.359997H227.7V57H224.82ZM230.625 57V0.359997H233.505V57H230.625ZM242.145 57V0.359997H250.785V57H242.145ZM253.665 57V0.359997H256.545V57H253.665ZM259.425 57V0.359997H262.305V57H259.425ZM265.185 57V0.359997H273.825V57H265.185ZM276.75 57V0.359997H279.63V57H276.75ZM282.51 57V0.359997H285.39V57H282.51ZM288.27 57V0.359997H296.91V57H288.27ZM299.79 57V0.359997H308.43V57H299.79ZM317.07 57V0.359997H319.95V57H317.07ZM322.875 57V0.359997H325.755V57H322.875ZM334.395 57V0.359997H343.035V57H334.395ZM345.915 57V0.359997H348.795V57H345.915ZM351.675 57V0.359997H360.315V57H351.675ZM363.195 57V0.359997H366.075V57H363.195ZM369 57V0.359997H371.88V57H369ZM380.52 57V0.359997H389.16V57H380.52ZM392.04 57V0.359997H394.92V57H392.04ZM397.8 57V0.359997H406.44V57H397.8ZM409.32 57V0.359997H412.2V57H409.32ZM415.125 57V0.359997H418.005V57H415.125ZM420.885 57V0.359997H429.525V57H420.885ZM432.405 57V0.359997H435.285V57H432.405ZM438.165 57V0.359997H446.805V57H438.165ZM455.445 57V0.359997H458.325V57H455.445ZM461.25 57V0.359997H464.13V57H461.25ZM472.77 57V0.359997H481.41V57H472.77ZM484.29 57V0.359997H487.17V57H484.29ZM490.05 57V0.359997H498.69V57H490.05ZM501.57 57V0.359997H504.45V57H501.57Z"
            fill="white"
          />
        </svg>
        <button type="submit" class="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FooterInputForm;
