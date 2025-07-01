export declare namespace RendererTypes {
    enum TextureWrap {
        Repeat = 0,
        ClampToEdge = 1,
        MirroredRepeat = 2
    }
    enum MagFilter {
        Nearest = 0,
        Linear = 1
    }
    enum MinFilter {
        Nearest = 0,
        Linear = 1,
        NearestMipmapNearest = 2,
        LinearMipmapNearest = 3,
        NearestMipmapLinear = 4,
        LinearMipmapLinear = 5
    }
    enum TextureFormat {
        R8Unorm = 0,
        RG8Unorm = 1,
        RGB8Unorm = 2,
        RGBA8Unorm = 3,
        RGBA32Float = 4,
        RGB32Float = 5,
        RGBA16Float = 6,
        RGB16Float = 7,
        R16Float = 8,
        Depth32Float = 9,
        R32Uint = 10,
        R32Float = 11
    }
    enum AttachmentLoadOp {
        Load = 0,
        Clear = 1
    }
    enum AttachmentStoreOp {
        Store = 0,
        Discard = 1
    }
    enum AttributeType {
        Byte = 0,
        UnsignedByte = 1,
        Short = 2,
        UnsignedShort = 3,
        Int = 4,
        UnsignedInt = 5,
        Float32 = 6
    }
    enum AttributeFormat {
        Float = 0,
        Integer = 1
    }
    enum BufferUsage {
        StaticDraw = 0,
        DynamicDraw = 1,
        StreamDraw = 2,
        StaticRead = 3,
        DynamicRead = 4,
        StreamRead = 5,
        StaticCopy = 6,
        DynamicCopy = 7,
        StreamCopy = 8
    }
    enum UniformType {
        Texture2D = 0,
        TextureCube = 1,
        Texture2DArray = 2,
        Texture3D = 3,
        Matrix3 = 4,
        Matrix4 = 5,
        Int1 = 6,
        Int2 = 7,
        Int3 = 8,
        Int4 = 9,
        Uint1 = 10,
        Uint2 = 11,
        Uint3 = 12,
        Uint4 = 13,
        Float1 = 14,
        Float2 = 15,
        Float3 = 16,
        Float4 = 17
    }
    enum FrontFace {
        CCW = 0,
        CW = 1
    }
    enum CullMode {
        None = 0,
        Front = 1,
        Back = 2
    }
    enum DepthCompare {
        Never = 0,
        Less = 1,
        Equal = 2,
        LessEqual = 3,
        Greater = 4,
        NotEqual = 5,
        GreaterEqual = 6,
        Always = 7
    }
    enum BlendOperation {
        Add = 0,
        Subtract = 1,
        ReverseSubtract = 2,
        Min = 3,
        Max = 4
    }
    enum BlendFactor {
        Zero = 0,
        One = 1,
        Src = 2,
        OneMinusSrc = 3,
        SrcAlpha = 4,
        OneMinusSrcAlpha = 5,
        Dst = 6,
        OneMinusDst = 7,
        DstAlpha = 8,
        OneMinusDstAlpha = 9
    }
}
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
//# sourceMappingURL=RendererTypes.d.ts.map