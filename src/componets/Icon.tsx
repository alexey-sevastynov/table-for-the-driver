import React from "react";
import { useDynamicSvgImport } from "../hooks/useDynamicSvgImport";

import { BallTriangle } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

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
          height={25}
          width={25}
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
