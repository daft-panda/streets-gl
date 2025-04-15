import HostInterfaceManager, { HostInterfaceManagerInterface } from "./core/HostInterfaceManager";
export * from "./core/HostInterfaceManager";

export function createHostInterfaceManager(): HostInterfaceManagerInterface {

    return new HostInterfaceManager();
}