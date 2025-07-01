export namespace Tile {
    function read(pbf: any, end: any): any;
    function _readField(tag: any, obj: any, pbf: any): void;
    function write(obj: any, pbf: any): void;
    namespace GeomType {
        namespace UNKNOWN {
            let value: number;
            let options: {};
        }
        namespace POINT {
            let value_1: number;
            export { value_1 as value };
            let options_1: {};
            export { options_1 as options };
        }
        namespace LINESTRING {
            let value_2: number;
            export { value_2 as value };
            let options_2: {};
            export { options_2 as options };
        }
        namespace POLYGON {
            let value_3: number;
            export { value_3 as value };
            let options_3: {};
            export { options_3 as options };
        }
    }
    namespace Value {
        function read(pbf: any, end: any): any;
        function _readField(tag: any, obj: any, pbf: any): void;
        function write(obj: any, pbf: any): void;
    }
    namespace Feature {
        function read(pbf: any, end: any): any;
        function _readField(tag: any, obj: any, pbf: any): void;
        function write(obj: any, pbf: any): void;
    }
    namespace Layer {
        function read(pbf: any, end: any): any;
        function _readField(tag: any, obj: any, pbf: any): void;
        function write(obj: any, pbf: any): void;
    }
}
//# sourceMappingURL=vector_tile.d.ts.map