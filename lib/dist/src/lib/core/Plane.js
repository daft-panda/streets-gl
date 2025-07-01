import t from"../math/Vec3.js";class s{x;y;z;w;constructor(t=0,s=1,i=0,h=0){this.x=t,this.y=s,this.z=i,this.w=h}normalize(){const t=Math.sqrt(this.x**2+this.y**2+this.z**2);return this.x/=t,this.y/=t,this.z/=t,this.w/=t,this}distanceToPoint(s){const i=new t(this.x,this.y,this.z);return t.dot(i,s)+this.w}}export{s as default};
//# sourceMappingURL=Plane.js.map
