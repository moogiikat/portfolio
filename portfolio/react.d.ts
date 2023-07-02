import { FC, PropsWithChildren } from "react";

declare module "react" {
  export declare type FCC<P = {}> = FC<PropsWithChildren<P>>;
  export declare type SC<P = {}> = ServerComponent<PropsWithChildren<P>>;
  export declare type PC<P = {}, SP = URLSearchParams> = FC<{
    params: P;
    searchParams: SP;
  }>;
  export declare type SCP<P = {}, SP = URLSearchParams> = ServerComponent<{
    params: P;
    searchParams: SP;
  }>;
  export declare type LC<P = {}> = FCC<{ params: P }>;
}
interface ServerComponent<P = {}> {
  (props: P): Promise<ReactElement<any, any> | null>;
}
