export interface VoucherRequest {
  vouchers: {
    count: number;
    aim: string;
    location: {
      latitude: number;
      longitude: number;
    };
    timestamp: string;
    creationMode: "Standard";
  }[];
}
