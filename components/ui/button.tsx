import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[#4F46E5] text-white shadow hover:bg-[#4338CA] focus-visible:ring-[#4F46E5]',
        destructive:
          'bg-red-500 text-white shadow-sm hover:bg-red-600 focus-visible:ring-red-500',
        outline:
          'border border-slate-300 bg-white text-slate-900 shadow-sm hover:bg-slate-50 focus-visible:ring-slate-400',
        secondary:
          'bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:ring-slate-400',
        ghost:
          'hover:bg-slate-100 text-slate-900 focus-visible:ring-slate-400',
        link: 'text-[#4F46E5] underline-offset-4 hover:underline focus-visible:ring-[#4F46E5]',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 rounded-lg px-4 text-xs',
        lg: 'h-12 rounded-xl px-7 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
