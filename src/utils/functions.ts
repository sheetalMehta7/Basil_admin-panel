export const getStatusChipColor = (status: string) => {
  switch (status) {
    case "Success":
      return "#53A450";
    case "Failure":
      return "#FF5630";
    case "Refund Initiated":
      return "#5053A4";
    case "Sent":
      return "#E28800";
    case "Refund Completed":
      return "#9D50A4";
    default:
      return "#E2D900";
  }
};

export const getActionChipColor = (status: string) => {
  switch (status) {
    case "Refund":
      return "#377DFF";
    case "Reorder":
      return "#B0B0B0";
    case "Cancel Order":
      return "#FF5630";
    default:
      return "#B0B0B0";
  }
};
