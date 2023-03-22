import { TableRow as MuiTableRow, TableCell } from "@mui/material";

interface TableRowProps {
  data: any;
  columns: string[];
  key: any;
  children: (rowData: any, column: string) => React.ReactNode;
}
const TableRow: React.FC<TableRowProps> = ({
  key,
  data,
  columns,
  children,
}) => {
  return (
    <MuiTableRow>
      {columns.map((column) => (
        <TableCell key={key}>{children(data, column)}</TableCell>
      ))}
    </MuiTableRow>
  );
};
export default TableRow;
