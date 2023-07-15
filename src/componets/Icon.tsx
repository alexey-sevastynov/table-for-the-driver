import React from "react";
import { useDynamicSvgImport } from "../hooks/useDynamicSvgImport";

import { BallTriangle } from "react-loader-spinner";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: string;
  className?: string;
}

export function Icon({ iconName, className, style, ...props }: IconProps) {
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && (
        <BallTriangle
          height={22}
          width={22}
          radius={5}
          color="white"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      )}

      {SvgIcon && <SvgIcon style={style} {...props} className={className} />}
    </>
  );
}
