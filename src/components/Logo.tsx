/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import logoUrl from '../../assets/rheinwert-logo-transparent.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSub?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showSub = true
}) => {
  const onDark = variant === 'light';

  return (
    <div
      className={`inline-flex items-center select-none ${
        onDark ? 'rounded-lg bg-white/95 px-2.5 py-1.5 shadow-sm ring-1 ring-white/10' : ''
      } ${className}`}
    >
      <img
        src={logoUrl}
        alt={showSub ? 'RheinWert Gutachten' : 'RheinWert'}
        className="block h-auto w-full object-contain"
        draggable={false}
      />
    </div>
  );
};
